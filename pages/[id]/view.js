import Index from '../index'
const Https = "https://harrys-app-clone.vercel.app";
// const Https = "http://localhost:3000";

const ViewProduct = ( {Data}) => {
 
  return (
    <div>
      <Index Data={Data}/>
    </div>
  );
};

ViewProduct.getInitialProps = async () => {
  const res = await fetch(`${Https}/api/products`);
  const { data } = await res.json();

  return { Data: data };
};

export default ViewProduct;
