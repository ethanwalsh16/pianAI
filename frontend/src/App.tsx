import Header from './components/Header';
import Handview from './components/Handview';
import Feedback from './components/Feedback';

function App() {
  return (
    <>
    	<Header />
		<div className = "grid grid-cols-3 w-full">
			<div className="col-span-2 w-[96%] ml-[1%] pt-[2%]">
				<Handview />
			</div>
			<div className = "col-span-1 w-[96%] ml-[1%] pt-[4%]">
				<Feedback />
			</div>
		</div>
		
		
    </>
  )
}

export default App
