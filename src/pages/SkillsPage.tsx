import { FC, memo, MouseEvent, useCallback, useState } from "react";
import StarBackground from "../widgets/StarBackground/ui/StarBackground";
import { motion } from "motion/react";
import { BUTTON_APPEARENCE_OPTIONS, TEXT_APPEARENCE_OPTIONS } from "../widgets/GreetingWindow/constants/constants";
import BackButton from "../shared/BackButton/ui/BackButton";
import SkillsBlock from "../widgets/SkillsBlock/ui/SkillsBlock";
import InteractiveButton from "../shared/InteractiveButton/ui/InteractiveButton";
import { useNavigate } from "react-router-dom";
import FillingRectangle from "../shared/FillingRectangle/ui/FillingRectangle";

const SkillsPage: FC = () => {
    const [roundingCoordinates, setRoundingCoordinates] = useState({x: 0, y: 0, clicked: false});
    const navigate = useNavigate()

    const onClickSeeMore = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setRoundingCoordinates({
            x: event.clientX,
            y: event.clientY,
            clicked: true
        })
    }, [event])

    return (
        <StarBackground>
            <div className='fixed z-10 left-5 top-5'>
                <BackButton navigation="/"/>
            </div>
            <div className='flex content-center justify-center items-center gap-50 w-full h-screen absolute'>
                <div className='text-white flex flex-col gap-5'>
                    <motion.div
                        initial={TEXT_APPEARENCE_OPTIONS.initial}
                        animate={TEXT_APPEARENCE_OPTIONS.animate}
                        transition={TEXT_APPEARENCE_OPTIONS.transition}
                        className='text-xl shadow-white font-bold'>
                            Мои основные навыки
                    </motion.div>
                    <motion.div
                        initial={TEXT_APPEARENCE_OPTIONS.initial}
                        animate={TEXT_APPEARENCE_OPTIONS.animate}
                        transition={TEXT_APPEARENCE_OPTIONS.transition}
                        className='shadow-white '>
                            Здесь будут описаны все мои навыки в разработке и все технологии, которые я знаю
                    </motion.div>
                    <motion.div
                        initial={TEXT_APPEARENCE_OPTIONS.initial}
                        animate={TEXT_APPEARENCE_OPTIONS.animate}
                        transition={TEXT_APPEARENCE_OPTIONS.transition}
                        >
                            <SkillsBlock/>
                    </motion.div>
                    <motion.div
                        initial={BUTTON_APPEARENCE_OPTIONS.initial}
                        animate={BUTTON_APPEARENCE_OPTIONS.animate}
                        transition={BUTTON_APPEARENCE_OPTIONS.transition}
                        >
                        <InteractiveButton text="Дальше" onClick={(e) => {onClickSeeMore(e)}}/>
                    </motion.div>
                    {
                        roundingCoordinates.clicked && <FillingRectangle x={roundingCoordinates.x} y={roundingCoordinates.y} color='bg-black' onContinue={() => navigate('/pricing')}/>
                    }
                </div>
                <motion.div
                    initial={TEXT_APPEARENCE_OPTIONS.initial}
                    animate={TEXT_APPEARENCE_OPTIONS.animate}
                    transition={TEXT_APPEARENCE_OPTIONS.transition}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    >
                        <img src="src/assets/hello-kitty.gif" className='w-90 aspect-square pointer-events-none self-end'/>
                </motion.div>
            </div>
        </StarBackground>
    )
}

export default memo(SkillsPage);