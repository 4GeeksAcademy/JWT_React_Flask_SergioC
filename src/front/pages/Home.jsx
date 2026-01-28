import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Footer } from "../components/Footer.jsx";
import { Form } from "../components/Form.jsx";
import { Navigate } from "react-router-dom";

export const Home = () => {	

	return (
		<div className="w-50 mx-auto text-center mt-5">
			<Form />		
		</div>
	);
}; 