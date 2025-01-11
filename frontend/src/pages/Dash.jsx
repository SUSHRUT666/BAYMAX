import CalorieForm from '../components/CalorieForm';
import DocSug from '../components/Docsug';
import FileUpload from '../components/FileUpload';
import Footer from '../components/Footer';
import Navbar2 from '../components/navbar2';
import Rem from '../components/Rem';
import SymptomForm from '../components/SymptomForm';

const Dashboard = () => {
  return (
    <>
      <Navbar2 />
      <div className='pt-24 bg-blue-100 '>
      <div className='min-h-screen p-4 py-8 '>
        <div className=' max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-montserrat'>
          <Card title="Calorie Counter">
            <CalorieForm />
          </Card>
          <Card title="Disease Predictor">
            <SymptomForm />
          </Card>
          <Card title="File Upload">
            <FileUpload />
          </Card>
          <Card title="Pills reminder">
            <Rem/>
          </Card>
          <Card title="Suggested Docs">
            <DocSug/>
          </Card>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

const Card = ({ title, children }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden border border-blue-900 hover:scale-105 duration-300'>
      <div className='bg-blue-950 text-white py-3 px-4'>
        <h2 className='text-xl font-semibold'>{title}</h2>
      </div>
      <div className='p-4'>
        {children}
      </div>
    </div>
  );
};

export default Dashboard;