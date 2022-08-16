import clsx from 'clsx';

export const AutoContainer = ({
  as: Comp = 'div',
  collapsible = true,
  className,
  children,
}) => {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        'static my-0 mx-auto max-w-[1200px] px-[15px] py-0',

        className
      )}
    >
      {children}
    </Comp>
  );
};
