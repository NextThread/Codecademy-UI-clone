/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Info from "./Info";
const CompanyInfo = () => {
	return (
		<div className="infoContainer">
			<div className="info">
				<h3 className="info__title">Company</h3>
				<div className="info__items">
					<a href="#">About</a>
					<a href="#">We're Hiring</a>
					<a href="#">Shop</a>
				</div>
			</div>
			<div className="info">
				<h3 className="info__title">Resources</h3>
				<div className="info__items">
					<a href="#">Blog</a>
					<a href="#">CheatSheets</a>
					<a href="#">Articles</a>
				</div>
			</div>

			<div className="info">
				<h3 className="info__title">Support</h3>
				<div className="info__items">
					<a href="#">Help Center</a>
				</div>
			</div>
			<div className="info">
				<h3 className="info__title">Community</h3>
				<div className="info__items">
					<a href="#">forums</a>
					<a href="#">Chapter</a>
					<a href="#">Events</a>
				</div>
			</div>

			<div className="info">
				<h3 className="info__title">Individual plans</h3>
				<div className="info__items">
					<a href="#">Pro membership</a>
					<a href="#">pro students</a>
				</div>
			</div>
			<div className="info">
				<h3 className="info__title">Enterprise plans</h3>
				<div className="info__items">
					<a href="#">for business</a>
					<a href="#">for education</a>
				</div>
			</div>
		</div>
	);
};

export default CompanyInfo;
