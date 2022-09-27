import React, { useMemo, useEffect, useRef } from 'react';
import { AutoContainer } from '../../components/Containers';
import { SectionTitle } from '../../components/Heading';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { animate } from 'framer-motion';
import {
  useAnimateInView,
  fadeInDown,
  motionParams,
} from '../../utils/hooks/animations';

const NumberColumn = ({ item, parentSize, isInView }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (isInView) {
      const controls = animate(0, item.number, {
        duration: 1,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });

      return () => controls.stop();
    }
  }, [isInView]);

  return (
    <motion.div
      className={`counter-column column flex  basis-full flex-col p-[10px] md:basis-1/${
        parentSize < 2 ? parentSize : 2
      } lg:basis-1/${parentSize < 4 ? parentSize : 4}`}
    >
      <div className='inner'>
        <div className='content'>
          <div className='count-outer count-box font-momentun'>
            <span className='count-text' ref={ref}>
              0
            </span>
          </div>
          <div className='counter-title'>{item.label}</div>
        </div>
      </div>
    </motion.div>
  );
};

const Counter = ({ slice }) => {
  const parentSize = useMemo(() => slice.items.length, [slice]);

  const { ref, inView } = useInView();
  const animation = useAnimateInView(inView);
  return (
    <section className='counter-section'>
      <AutoContainer>
        <SectionTitle
          heading={slice.primary.title}
          text={slice.primary.description}
        />

        {/* Fact Counter */}
        <motion.div
          ref={ref}
          variants={fadeInDown()}
          {...motionParams}
          animate={animation}
          className='fact-counter'
        >
          <div className='flex flex-row flex-wrap'>
            {slice.items.map((item, index) => {
              return (
                <NumberColumn
                  item={item}
                  key={index}
                  parentSize={parentSize}
                  isInView={inView}
                />
              );
            })}
          </div>
        </motion.div>
      </AutoContainer>
    </section>
  );
};

export default Counter;
