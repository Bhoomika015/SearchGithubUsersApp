import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';

const Repos_data = () => {
  const {contributions} = React.useContext(GithubContext)
  return <Wrapper1><Wrapper>
    <div className='followers'>
      {contributions.map((contribution)=>{
        const {total,author}=contribution;
        console.log('author');
        console.log(author.login);
        return <article>
          <div> 
              <h4>Total Commits:{total}</h4>
              <h4>Contributions:{author.login}</h4>
          </div>
        </article>
      })}
    </div>
  </Wrapper>
  </Wrapper1>;
};

const Wrapper = styled.article`
   background: #161625;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  
 
  &::before {
    content: ' All_Repositories';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
   background:rgba(0, 123, 255, 0.125);
    color:#F4D03F ;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.8rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 2rem;
  }
  .followers {
    overflow: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 0.3rem 1rem;
    padding: 0.3rem rem;
     padding-top:1rem;

  }
  article {
    transition: var(--transition);
    padding: 0.8rem 1rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-grey-5);
    }
  }
  
`;
const Wrapper1 = styled.div`
  padding-top: 10rem;
  padding-left:21rem;
  padding-right:21rem;
  max-width:100%;
  gap: 3rem 5rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;
export default Repos_data;
