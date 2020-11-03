import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import {  Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';



const Repos = () => {
const {repos} = React.useContext(GithubContext)

  console.log(repos)

 let languages=repos.reduce((total,item)=>{
  
  const {language,stargazers_count}=item;

  if(!language)
    return total
  if(!total[language]){
    total[language]={label:language,value:1,stars:stargazers_count};
  }
  else
  {
    total[language]={...total[language],value:total[language].value+1,stars:total[language].stars+stargazers_count}
  }
    
    return total
 },{}) 



 const mostUsed=Object.values(languages).sort((a,b)=>{
   return b.value-a.value
 }).slice(0,5)



 const mostPop=Object.values(languages).sort((a,b)=>{
  return b.stars-a.stars
}).map((item)=>{
  return {...item,value:item.stars}
}).slice(0,5)


let {stars,forks}=repos.reduce((total,item)=>{
  
  const {stargazers_count,name,forks}=item;
  total.stars[stargazers_count]={label:name,value:stargazers_count}

  total.forks[forks]={label:name,value:forks}
  return total
  
},{
  stars:{},forks:{}
})

stars=Object.values(stars).slice(-5).reverse()
forks=Object.values(forks).slice(-5).reverse()


 console.log('sample')
  console.log(mostPop)
  // return <ExampleChart data={chartData}/>;


  return(
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={mostUsed}/>
        <Column3D data={stars}/>
        <Doughnut2D data={mostPop}/>
        <Bar3D data={forks}/>
      </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
  display: grid;
  padding-top:3rem;
  justify-items: center;
  gap: 5rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% ;
  }
  .fusioncharts-container {
    max-width: 100%;
  }
  svg {
    width: 100%;
    border-radius: var(--radius) ;
  }
`;



//.fusioncharts-container {
  //  width: 100% !important;
  //}
export default Repos;
