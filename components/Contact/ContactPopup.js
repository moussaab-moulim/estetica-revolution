import { css } from "@emotion/css";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContactPopup } from "./contactPopupContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const StepperComponent = dynamic(() => import("./CustomStepper"), {
    ssr: false,
});
const schema = yup.object({
    age: yup.string().nullable(false).required("Veuillez remplir ce champ"),
    height: yup.string().nullable(false).required("Veuillez remplir ce champ"),
    weight: yup.string().nullable(false).required("Veuillez remplir ce champ"),
    wantedWeight: yup
        .string()
        .nullable(false)
        .required("Veuillez remplir ce champ"),
    objectives: yup.array(yup.string()),
    name: yup.string().required("Veuillez remplir ce champ"),
    mail: yup
        .string()
        .nullable(false)
        .email("Format invalide")
        .required("Veuillez remplir ce champ"),
    phone: yup.string().nullable(false).required("Veuillez remplir ce champ"),
    message: yup.string().nullable(true),
});

function ContactPopup() {
    const { open, closePopup } = useContactPopup();
    const { handleSubmit, control, formState, reset, watch } = useForm({
        mode: "all",
        resolver: yupResolver(schema),
        defaultValues: {
            age: "",
            height: "",
            weight: "",
            wantedWeight: "",
            objectives: [],
            name: "",
            mail: "",
            phone: "",
            message: "",
        },
    });
    const [step, setStep] = useState(1);
    const onSubmit = async (data) => {
        const mailData = {
            from: `estetica revolution <postmaster@esteticarevolution.com>`,
            to: "info@esteticarevolution.com",
            subject: `Esteteticarevolition - Demande bilan personnalisé`,
            replyTo: data.mail,
            text: data.message,
            html: `
        <div>
          <p>nom: ${data.name}</p>
          <p>email: ${data.mail}</p>
          <p>téléphone: ${data.mail}</p>
          <p>message: ${data.message}</p>
          <p>age: ${data.age}</p>
          <p>taille: ${data.height}</p>
          <p>poids: ${data.weight}</p>
          <p>poids souhaité: ${data.wantedWeight}</p>
          <p>objectives: </p>
          <ul>
          ${Object.entries(data.objectives)
              .filter((_ob) => _ob[1] === true)
              .map((val) => `<li>${val[0]}</li>`)
              .reduce((prev, next) => prev + next)}
            </ul>
        </div>`,
        };
        const contactResposne = await fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mailData),
        });

        if (contactResposne.status === 200) {
            toast.success("Fomulaire envoyé avec success.\n");
            reset();
        } else {
            toast.error("Echec d'envoi.");
        }
    };

    return (
        <div
            id="purchase-popup"
            className={clsx("purchase-popup", open && "popup-visible")}
        >
            <div className="close-search theme-btn" onClick={closePopup}>
                <span>Close</span>
            </div>
            <div className="popup-inner">
                <div className="overlay-layer"></div>

                <div className="purchase-form">
                    <div className="sec-title centered">
                        <h2>
                            <span>Bilan</span> Personnalisé
                        </h2>
                        <div className="text">
                            Ton rendez-vous est offert et sans engagement
                        </div>
                    </div>

                    <form
                        className="default-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="flex flex-col flex-nowrap">
                            <StepperComponent activeStep={step - 1} />

                            <div
                                className={clsx(
                                    step === 1 ? "flex" : "hidden",
                                    "flex-col flex-nowrap",
                                    css`
                                        .error {
                                            border-color: rgb(
                                                220,
                                                38,
                                                38
                                            ) !important;
                                        }
                                    `,
                                )}
                            >
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <Controller
                                        name="age"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Fragment>
                                                <input
                                                    type="number"
                                                    className={`${
                                                        fieldState.error &&
                                                        "error"
                                                    }`}
                                                    placeholder="ÂGE :"
                                                    {...field}
                                                />
                                                {fieldState.error && (
                                                    <span className="font-poppins text-red-600">
                                                        {
                                                            fieldState.error
                                                                .message
                                                        }
                                                    </span>
                                                )}
                                            </Fragment>
                                        )}
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <Controller
                                        name="height"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Fragment>
                                                <input
                                                    type="number"
                                                    className={`${
                                                        fieldState.error &&
                                                        "error"
                                                    }`}
                                                    placeholder="TAILLE (CM) :"
                                                    {...field}
                                                />
                                                {fieldState.error && (
                                                    <span className="font-poppins text-red-600">
                                                        {
                                                            fieldState.error
                                                                .message
                                                        }
                                                    </span>
                                                )}
                                            </Fragment>
                                        )}
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <Controller
                                        name="weight"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Fragment>
                                                <input
                                                    type="number"
                                                    className={`${
                                                        fieldState.error &&
                                                        "error"
                                                    }`}
                                                    placeholder="POIDS ACTUEL (KG) :"
                                                    {...field}
                                                />
                                                {fieldState.error && (
                                                    <span className="font-poppins text-red-600">
                                                        {
                                                            fieldState.error
                                                                .message
                                                        }
                                                    </span>
                                                )}
                                            </Fragment>
                                        )}
                                    />
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <Controller
                                        name="wantedWeight"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Fragment>
                                                <input
                                                    type="number"
                                                    className={`${
                                                        fieldState.error &&
                                                        "error"
                                                    }`}
                                                    placeholder="POIDS SOUHAITÉ (KG) :"
                                                    {...field}
                                                />
                                                {fieldState.error && (
                                                    <span className="font-poppins text-red-600">
                                                        {
                                                            fieldState.error
                                                                .message
                                                        }
                                                    </span>
                                                )}
                                            </Fragment>
                                        )}
                                    />
                                </div>
                            </div>

                            <div
                                className={clsx(
                                    step === 2 ? "flex" : "hidden",
                                    " flex-col flex-nowrap",
                                )}
                            >
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <Controller
                                        name="objectives.Perte de poids"
                                        control={control}
                                        render={({ field }) => (
                                            <Fragment>
                                                <input
                                                    type="checkbox"
                                                    value="Perte de poids"
                                                    {...field}
                                                />{" "}
                                                Perte de poids
                                            </Fragment>
                                        )}
                                    />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <Controller
                                        name="objectives.Remise en forme"
                                        control={control}
                                        render={({ field }) => (
                                            <Fragment>
                                                <input
                                                    type="checkbox"
                                                    value="Remise en forme"
                                                    {...field}
                                                />{" "}
                                                Remise en forme
                                            </Fragment>
                                        )}
                                    />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <Controller
                                        name="objectives.Bien-être (cardio et renforcement)"
                                        control={control}
                                        render={({ field }) => (
                                            <Fragment>
                                                <input
                                                    type="checkbox"
                                                    value="Bien-être (cardio et renforcement)"
                                                    {...field}
                                                />{" "}
                                                Bien-être (cardio et
                                                renforcement)
                                            </Fragment>
                                        )}
                                    />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <Controller
                                        name="objectives.Raison médicale"
                                        control={control}
                                        render={({ field }) => (
                                            <Fragment>
                                                <input
                                                    type="checkbox"
                                                    value="Raison médicale"
                                                    {...field}
                                                />
                                                Raison médicale
                                            </Fragment>
                                        )}
                                    />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <Controller
                                        name="objectives.Tonification et renforcement musculaire"
                                        control={control}
                                        render={({ field }) => (
                                            <Fragment>
                                                <input
                                                    type="checkbox"
                                                    value="Tonification et renforcement musculaire"
                                                    {...field}
                                                />{" "}
                                                Tonification et renforcement
                                                musculaire
                                            </Fragment>
                                        )}
                                    />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <Controller
                                        name="objectives.Préparation physique et performances"
                                        control={control}
                                        render={({ field }) => (
                                            <Fragment>
                                                <input
                                                    type="checkbox"
                                                    value="Préparation physique et performances"
                                                    {...field}
                                                />{" "}
                                                Préparation physique et
                                                performances
                                            </Fragment>
                                        )}
                                    />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <Controller
                                        name="objectives.Prise de masse"
                                        control={control}
                                        render={({ field }) => (
                                            <Fragment>
                                                <input
                                                    type="checkbox"
                                                    value="Prise de masse"
                                                    {...field}
                                                />{" "}
                                                Prise de masse
                                            </Fragment>
                                        )}
                                    />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <Controller
                                        name="objectives.Autre"
                                        control={control}
                                        render={({ field }) => (
                                            <Fragment>
                                                <input
                                                    type="checkbox"
                                                    value="Autre"
                                                    {...field}
                                                />{" "}
                                                Autre
                                            </Fragment>
                                        )}
                                    />
                                </div>
                            </div>

                            <div
                                className={clsx(
                                    step === 3 ? "flex" : "hidden",
                                    " flex-col flex-nowrap",
                                )}
                            >
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <Controller
                                        name="name"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Fragment>
                                                <input
                                                    type="text"
                                                    className={`${
                                                        fieldState.error &&
                                                        "error"
                                                    }`}
                                                    placeholder="NOM :"
                                                    {...field}
                                                />
                                                {fieldState.error && (
                                                    <span className="font-poppins text-red-600">
                                                        {
                                                            fieldState.error
                                                                .message
                                                        }
                                                    </span>
                                                )}
                                            </Fragment>
                                        )}
                                    />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <Controller
                                        name="mail"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Fragment>
                                                <input
                                                    type="email"
                                                    className={`${
                                                        fieldState.error &&
                                                        "error"
                                                    }`}
                                                    placeholder="ADRESSE MAIL :"
                                                    {...field}
                                                />
                                                {fieldState.error && (
                                                    <span className="font-poppins text-red-600">
                                                        {
                                                            fieldState.error
                                                                .message
                                                        }
                                                    </span>
                                                )}
                                            </Fragment>
                                        )}
                                    />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <Controller
                                        name="phone"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <Fragment>
                                                <input
                                                    type="tel"
                                                    className={`${
                                                        fieldState.error &&
                                                        "error"
                                                    }`}
                                                    placeholder="TÉLÉPHONE :"
                                                    {...field}
                                                />
                                                {fieldState.error && (
                                                    <span className="font-poppins text-red-600">
                                                        {
                                                            fieldState.error
                                                                .message
                                                        }
                                                    </span>
                                                )}
                                            </Fragment>
                                        )}
                                    />
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <Controller
                                        name="message"
                                        control={control}
                                        render={({ field }) => (
                                            <textarea
                                                className="darma"
                                                placeholder="MESSAGE (Optionel):"
                                                {...field}
                                            />
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="form-group col-lg-12 col-md-12 col-sm-12 text-center">
                                {step > 1 && (
                                    <button
                                        disabled={formState.isSubmitting}
                                        className="theme-btn btn-style-one mb-3"
                                        onClick={() => setStep(step - 1)}
                                    >
                                        <span className="txt">Précédent</span>
                                    </button>
                                )}
                                {step < 3 && (
                                    <button
                                        className="theme-btn btn-style-one mb-3"
                                        disabled={
                                            step === 1 &&
                                            (formState.errors.age ||
                                                formState.errors.height ||
                                                formState.errors.weight ||
                                                formState.errors.wantedWeight ||
                                                !formState.dirtyFields.age ||
                                                !formState.dirtyFields.height ||
                                                !formState.dirtyFields.weight ||
                                                !formState.dirtyFields
                                                    .wantedWeight)
                                        }
                                        onClick={() => setStep(step + 1)}
                                    >
                                        <span className="txt">Suivant</span>
                                    </button>
                                )}
                                {step === 3 && (
                                    <button
                                        disabled={
                                            !formState.isValid ||
                                            formState.isSubmitting
                                        }
                                        className="theme-btn btn-style-one"
                                        type="submit"
                                        name="submit-form"
                                    >
                                        <span className="txt">ENVOYER</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPopup;
