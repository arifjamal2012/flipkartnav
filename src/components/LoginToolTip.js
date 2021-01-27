import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PanoramaHorizontalIcon from '@material-ui/icons/PanoramaHorizontal';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import StoreIcon from '@material-ui/icons/Store';
import './LoginToolTip.css';

const LoginToolTip = () => {
	return (
		<div className='logintool'>
			<div className='logintool__in'>
				<h4>New customer?</h4>
				<h4
					style={{
						marginLeft: '45px',
						color: ' #2874f0',
					}}>
					Sign Up
				</h4>
			</div>
			<hr />
			<div className='logintool__in'>
				<AccountCircleIcon />
				<p>My Profile</p>
			</div>
			<hr />
			<div className='logintool__in'>
				<PanoramaHorizontalIcon />
				<p>Flipkart Plus Zone</p>
			</div>
			<hr />
			<div className='logintool__in'>
				<StoreIcon />
				<p>Orders</p>
			</div>
			<hr />
			<div className='logintool__in'>
				<FavoriteIcon />
				<p>Wishlist</p>
			</div>
			<hr />
			<div className='logintool__in'>
				<ConfirmationNumberIcon />
				<p>Rewards</p>
			</div>
			<hr />
			<div className='logintool__in'>
				<CardGiftcardIcon />
				<p>Gift Cards</p>
			</div>
		</div>
	);
};

export default LoginToolTip;
