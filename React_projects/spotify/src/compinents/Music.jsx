import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import key from "../config/token";
import SongItem from "./SongItem";
import '../style/song.css'
const URL = 'https://api.spotify.com'

function Music(props){
    const [songs,setSongs] = useState([])

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

    return(
        <div className="container-fluid music p-4">
            <div className="section-header text-white">
                <h1>Tracks</h1>
            </div>
            <div className="row">
                {
                    songs && songs.map((item,index)=> {
                        return(
                            <SongItem key={index} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Music