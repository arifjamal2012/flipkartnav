import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MoreToolTip from './MoreToolTip';
import LoginToolTip from './LoginToolTip';
import 'tippy.js/themes/light.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='header__first'>
				<img
					src='//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
					alt='flipkart-logo'
				/>
				<div className='header__first1'>
					<span
						style={{
							fontSize: '12px',
							color: 'white',
							fontStyle: 'italic',
						}}>
						Explore
					</span>
					<span
						style={{
							color: '#f9e107',
							fontSize: '12px',
							fontStyle: 'italic',
						}}>
						Plus
					</span>
					<span>
						<img
							style={{ width: '11px', paddingLeft: '2px' }}
							src='//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'
						/>
					</span>
				</div>
			</div>
			<div className='header__second'>
				<input
					placeholder='Search for products,brands and more'
					type='text'></input>
				<SearchIcon />
			</div>
			<div className='header__third'>
				<Tippy
					theme='light'
					content={<LoginToolTip></LoginToolTip>}
					interactive={true}>
					<button>Login</button>
				</Tippy>
			</div>
			<div className='header__fourth'>
				<Tippy
					theme='light'
					content={<MoreToolTip></MoreToolTip>}
					interactive={true}
					offset={[5, 15]}>
					<span>More</span>
				</Tippy>

				<ExpandMoreIcon />
			</div>
			<div className='header__fifth'>
				<ShoppingCartIcon />
				<p>Cart</p>
			</div>
		</div>
	);
};

export default Header;
