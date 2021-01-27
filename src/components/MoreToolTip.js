import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GetAppIcon from '@material-ui/icons/GetApp';
import './MoreToolTip.css';

const MoreToolTip = () => {
	return (
		<div className='moretool'>
			<div className='moretool__in'>
				<NotificationsIcon />
				<p>Notification Preferences</p>
			</div>
			<div className='moretool__in'>
				<MonetizationOnIcon />
				<p>Sell on Flipkart</p>
			</div>
			<div className='moretool__in'>
				<LiveHelpIcon />
				<p>24*7 Customer Care</p>
			</div>
			<div className='moretool__in'>
				<TrendingUpIcon />
				<p>Advertise</p>
			</div>
			<div className='moretool__in'>
				<GetAppIcon />
				<p>Download App</p>
			</div>
		</div>
	);
};

export default MoreToolTip;
