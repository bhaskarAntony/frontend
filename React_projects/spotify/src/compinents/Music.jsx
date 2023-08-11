import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import key from "../config/token";
import SongItem from "./SongItem";
import '../style/song.css'
const URL = 'https://api.spotify.com'

function Music(props){
    const [songs,setSongs] = useState([])
    const [audio, setAudio] = useState(null) //audio player
    const [preUrl, setPreUrl] = useState(false) //url
    const [playing, setPlaying] = useState(false)//play or pause the song


    const params = useParams()

    const searchTracks = async () => {
        await fetch(`${URL}/v1/artists/${params.artistId}/top-tracks?market=IN`, {
            method: "GET",
            headers:{
                Authorization: `Bearer ${key}`
            }
        }).then(res => res.json())
        .then(resp => {
            console.log(`data =`, resp)
            setSongs(resp.tracks)
        })
        .catch(err => toast.error(err.message))
    }

    useEffect(() => {
        searchTracks()
    },[])


    //generating icons
    const setIcon = (url) => {
      if(!url)
        return(
            <i class="bi bi-bell-slash-fill"></i>
          )
      if(playing && preUrl === url)
         return (
            <i class="bi bi-pause-fill"></i>
        )
      return(
        <i class="bi bi-play-fill"></i>
      )
    }

    //play and pause lagic
    const playAudio = (url) =>{
      const myAudio = new Audio(url);
    if(!playing){
        //intial play
        myAudio.play();
        setPlaying(true);
        setAudio(myAudio);
        setPreUrl(url)
    }
    else{
      //pause
      audio.pause()
      if(preUrl === url){
        setPlaying(false)
      }
      else{
         //pause to play
         myAudio.play()
        //  setPlaying(true);
         setAudio(myAudio);
         setPreUrl(url)
      }
    }
    }
    return(
        <div className="container-fluid music p-4">
            <div className="section-header text-white">
                <h1>Tracks</h1>
            </div>
            <div className="row">
                {
                    songs && songs.map((item,index)=> {
                        return(
                            <SongItem key={index} {...item} iconHandler={setIcon} songHandler={playAudio} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Music