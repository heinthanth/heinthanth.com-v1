import { useEffect } from "react";

function ScrollTopOnMount() {
	useEffect(() => {
		document.getElementById("main-content").scrollTop = 0;
	}, []);
	
	return null;
}

export default ScrollTopOnMount;