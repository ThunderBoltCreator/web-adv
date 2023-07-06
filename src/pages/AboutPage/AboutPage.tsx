import {FC} from "react";

import s from './aboutPage.module.scss'
import {Counter} from "../../components/Counter/Counter";

interface IAboutPage {
}

const AboutPage: FC<IAboutPage> = () => {

	return <><Counter /></>;
};

export default AboutPage