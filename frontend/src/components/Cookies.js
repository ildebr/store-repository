import CookieConsent from "react-cookie-consent";

const Cookies = () => {


	return (
		<div>
			<CookieConsent
			  location="bottom"
			  buttonText="Accept"
			  cookieName="CookieConsent"
			  style={{ background: "#2B373B" }}
			  buttonStyle={{ backgroundColor: "#007bff", fontSize: "13px" }}
			  expires={150}
			>
			  This website uses cookies to enhance the user experience. By clicking accept you agree to them.
			</CookieConsent>
			<CookieConsent
			  location="bottom"
			  buttonText="I'm 18!"
			  cookieName="AgeCookie"
			  style={{ background: "#2B373B" }}
			  buttonStyle={{ backgroundColor: "#007bff", fontSize: "13px" }}
			  expires={150}
			>
			  By clicking I'm 18 you confirm you're 18 or older
			</CookieConsent>
		</div>
		)
}

export default Cookies