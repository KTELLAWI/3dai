import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence >
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header  {...slideAnimation("down")}>
            {/* <img 
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain "
            /> */}
          </motion.header>

          <motion.div className="home-content " {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text font-mono ">
               ميز <br className="xl:block hidden" /> منتجك
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal font-mono text-gray-600 text-base">
              باستخدام الذكاء الاصطناعي صمم شكل الطباعة لمنتجك <strong>أطلق العنان لمخيلتك</strong>{" "} وأنشى مايميزك
              </p>

              
              <motion.div
              {...headContentAnimation}
              className="flex w-full justify-between items-center gap-3"
            >

              <CustomButton 
                type="filled"
                title="الكأس"
                handleClick={() => {state.intro = false;
                state.twoModels=false}}
                customStyles="  font-bold text-sm font-mono"
              />
              <CustomButton 
                type="filled"
                title="التيشرت"
                handleClick={() => {state.intro = false;
                state.twoModels=false
                state.isTeaPot=false}}
                customStyles=" font-bold text-sm font-mono"
              />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home