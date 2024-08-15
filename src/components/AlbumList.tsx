import { Link } from "react-router-dom";
import { Album } from "./Album.interface";
import './AlbumList.css';

interface AlbumListProps {
    albums: Album[];
}

function AlbumList({ albums }: AlbumListProps) {
    return (
    <ul className="album-menu">
        {albums.map(album => (
            <li className="box" key={album.id}>
                <div>UserId: {album.userId}</div>
                <div>Id: {album.id}</div>
                <div>Title: <Link to={`/albums/${album.id}/photos`}>{album.title}</Link></div>
            </li>
        ))}
    </ul>
    );
}

export default AlbumList;