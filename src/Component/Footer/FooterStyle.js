import styled from 'styled-components';

export const Box = styled.div`
padding: 10rem 7rem;
background: white;

width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width:100%;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(240px, 1fr));
grid-gap: 0px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: rgba(22, 15, 41, 0.8);
margin-bottom: 20px;
font-size: 1.7rem;
text-decoration: none;
font-weight:500;
&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 3.6rem;
color: #7609A8;
margin-bottom: 40px;
font-weight: 500;
`;
export const Logo = styled.span`
width:35%;
margin-bottom: 40px;
`;

