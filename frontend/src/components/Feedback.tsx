import Score from './Score';
import FeedbackChat from './FeedbackChat';

function Feedback() {

  return (
    <>
    	<div className="w-[100%] bg-gray-500 h-[36rem] rounded-lg py-3 space-y-8 grid grid-cols-1 grid-rows-5">
			<div className="row-span-3">
				<FeedbackChat />
			</div>
			<div className="row-span-2">
				<Score />
			</div>
		</div>
    </>
  )
}

export default Feedback
