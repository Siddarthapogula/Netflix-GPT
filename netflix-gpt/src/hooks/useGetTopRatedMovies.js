import { useDispatch } from "react-redux";
import {  addTopRatedMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useGetTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const getTopRatedMovies = async ()=>{
      const response =  await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', OPTIONS);
      const data = await response.json();
      console.log(data);
      dispatch(addTopRatedMovies(data));
    }
    useEffect(()=>{
      getTopRatedMovies();
    },[])
  
};

export default useGetTopRatedMovies;