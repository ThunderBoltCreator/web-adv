import {FC, Suspense, useContext, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";

// import MainPage from "./pages/MainPage/MainPage";
// import AboutPage from "./pages/AboutPage/AboutPage";
import {MAinPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

import './styles/style.scss'
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


export const App: FC = () => {
const {toggleTheme, theme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Theme</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>Счетчик</Link>
			<Suspense fallback={<div>Loading...</div>}>
		<Routes>
				<Route path={'/'} element={ <MAinPageAsync /> } />
				<Route path={'about'} element={ <AboutPageAsync /> } />


		</Routes>
			</Suspense>
		</div>
	);
};