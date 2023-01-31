const Logo = ({ width = 35, height = 35 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0,0,256,256"
			width={`${width}px`}
			height={`${height}px`}
			fill-rule="nonzero"
		>
			<g
				fill="#9400d3"
				fill-rule="nonzero"
				stroke="none"
				stroke-width="1"
				stroke-linecap="butt"
				stroke-linejoin="miter"
				stroke-miterlimit="10"
				stroke-dasharray=""
				stroke-dashoffset="0"
				font-family="none"
				font-weight="none"
				font-size="none"
				text-anchor="none"
				style="mix-blend-mode: normal"
			>
				<g transform="scale(3.55556,3.55556)">
					<path d="M18,12c-3.314,0 -6,2.686 -6,6v9c0,3.314 2.686,6 6,6h9c3.314,0 6,-2.686 6,-6v-9c0,-3.314 -2.686,-6 -6,-6zM45,12c-3.314,0 -6,2.686 -6,6v9c0,3.314 2.686,6 6,6h9c3.314,0 6,-2.686 6,-6v-9c0,-3.314 -2.686,-6 -6,-6zM19,18h7c0.552,0 1,0.448 1,1v7c0,0.552 -0.448,1 -1,1h-7c-0.552,0 -1,-0.448 -1,-1v-7c0,-0.552 0.448,-1 1,-1zM46,18h7c0.552,0 1,0.448 1,1v7c0,0.552 -0.448,1 -1,1h-7c-0.552,0 -1,-0.448 -1,-1v-7c0,-0.552 0.448,-1 1,-1zM20,20v5h5v-5zM47,20v5h5v-5zM18,39c-3.314,0 -6,2.686 -6,6v9c0,3.314 2.686,6 6,6h9c3.314,0 6,-2.686 6,-6v-9c0,-3.314 -2.686,-6 -6,-6zM39,39v7h7v-7zM46,46v7h7v-7zM53,46h7v-7h-7zM53,53v7h7v-7zM46,53h-7v7h7zM19,45h7c0.552,0 1,0.448 1,1v7c0,0.552 -0.448,1 -1,1h-7c-0.552,0 -1,-0.448 -1,-1v-7c0,-0.552 0.448,-1 1,-1zM20,47v5h5v-5z"></path>
				</g>
			</g>
		</svg>
	);
};

export default Logo;