import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Navigate, useNavigate } from 'react-router-dom';
import cashbackImage from '../images/cashback2.png';
import pointsImage from '../images/coin.png';
import referralImage from '../images/referral.png';
import offerImage from '../images/offer.png';

const Rewards = () => {
  const navigate = useNavigate();
  const rewards = [
    { id: 1, title: 'Cashback', description: 'Earn cashback on every purchase.', image: cashbackImage },
    { id: 2, title: 'Points', description: 'Collect points and redeem them for rewards.', image: pointsImage },
    { id: 3, title: 'Referral Program', description: 'Refer friends and earn rewards.', image: referralImage },
    { id: 4, title: 'Offer', description: 'Checkout amzing deals on selected brands', image: offerImage },
  ];
 const navigatePage=(id)=>{
  switch (id) {
    case 1:
      navigate ('/cashback')
    case 2:
      navigate ('/points')
    case 3:
      navigate ('/referral')
    case  4:
      navigate ('/offer')
    default:
      return null
  }
 }

  return (
    <div>
       
         <div className="col-lg-10 offset-lg-1">
       <h2 className='form-title'> <span class="align-middle">Rewards </span></h2>
       </div>
      <TransitionGroup className="rewards-container">
        {rewards.map(reward => (
          <CSSTransition key={reward.id} timeout={500} classNames="fade">
            <div className="reward-card">
              <img src={reward.image} alt={reward.title}  />
              <h3>{reward.title}</h3>
              <p>{reward.description}</p>
              <div className="contact_form_button">

                                   <button type="submit" className="button contact_submit_button"  
                                      onClick={()=> navigatePage(reward.id)}>Use reward</button>
                                    </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Rewards
