import React, { useEffect, useState } from "react";
import constant from "../../constant";
export const Auth_Popup = () => {
	const [externalPopup, setExternalPopup] = useState(null);
	const connectClick = () => {
		const width = 1000;
		const height = 800;
		const left = window.screenX + (window.outerWidth - width) / 2;
		const top = window.screenY + (window.outerHeight - height) / 2.5;
		const title = `Facebook Login`;
		const url = `${constant.API_URL}/auth/facebook`;
		const popup = window.open(
			url,
			title,
			`width=${width},height=${height},left=${left},top=${top}`
		);
		setExternalPopup(popup);
	};

	useEffect(() => {
		if (!externalPopup) {
			return;
		}

		const content = externalPopup.document.body.innerHTML;
		console.log(content);
	}, [externalPopup]);
	return (
		<>
			<button onClick={connectClick}>Connect</button>
		</>
	);
};
