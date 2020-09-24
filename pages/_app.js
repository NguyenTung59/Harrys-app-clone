import '../styles/globals.css';
//style css ant
import 'antd/dist/antd.css';
import '../components/cart/index.css'
import '../components/harrys/index.css'
import '../components/home/home.css'
import '../node_modules/react-quill/dist/quill.snow.css';


function MyApp({ Component, pageProps }) {
	return (
			<Component {...pageProps} />
	);
}

export default MyApp;
