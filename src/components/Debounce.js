import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

const heroes = [
    {
        superhero: 'Batman',
        publisher: 'Dc Comics',
        alter_ego: 'Bruce Wayne',
        character: 'Bruce Wayne'
    }
]


const StyledWrapper = styled.div`
    position: relative;
`
const StyledTextBox = styled.input`
    height: 4.5rem;
    width:16rem;
    padding:0 1.5rem;
    border-radius: 0.75rem;
    border: 0;
    background: #212025;
    color: #f9f9f9;
    transition: all 0.3s;

    &::placeholder{
        color: rgba(255, 255, 255, 0.65);
    }
`
const StyledIcon = styled.span`
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.96);
    font-size: 22px;
`
const StyledResults = styled.div`
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    background: #212025;
    color: #f9f9f9;
`


function useDebounce(value, delay){
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() =>{
        const handler = setTimeout(() =>{
            setDebounceValue(value);
        }, delay);
        return () =>{
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debounceValue;
}

 const Debounce = ({className}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const debounceSearchTerm = useDebounce(searchTerm , 500);



    useEffect(()=>{
        if(debounceSearchTerm){
            setSearchTerm(false);
            setResults(
                heroes.filter(item =>
                  item.superhero.toLowerCase().includes(searchTerm.toLowerCase())  
                    )
            );
            setIsSearching(false);
        }
        else{
            setResults([]);
            setIsSearching(false)
        }
    }, [debounceSearchTerm]);
    
    

  return(
    <StyledWrapper>
        <StyledTextBox placeholder="Start Searching" onChange={e => setSearchTerm(e.target.value)}/>
    <StyledIcon className="uil uil-search"/>
    <StyledResults>
        {
        results?.map((item, index) =>
        <div key={index}>
            {item.superhero}
        </div>
        ) 
        }
    </StyledResults>   
    </StyledWrapper>
   )

 }
 export default Debounce;