import React, {Component} from 'react';
import logo from '../logo.svg';
import './imgupload.css';
import ImageUploader from 'react-images-upload';
import axios from "axios"

class ImgUpload extends Component {

    constructor(props) {
        super(props);
        this.state={
            pictures: []
        }
        this.onDrop = this.onDrop.bind(this)
        this.uploadImages = this.uploadImages.bind(this)
    }
    
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    uploadImages() {
        console.log(this.state.pictures)
        let uploadPromises = this.state.pictures.map(image => {
            let data = new FormData();
            data.append("image", image, image.name)
            return axios.post("/api/uploadImage", data)
        })

        axios.all(uploadPromises)
        .then(results => {
            console.log(results)
        })
        .catch(e => {
            console.log(e)
        })
    }

render() {
  return (
    <div className="imgUploadContainer">
        <h2>Profile Information</h2>
        <img className="logo" src={logo} />

        <ImageUploader
                withIcon={true}
                withPreview={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png']}
                maxFileSize={5242880}
            />
            <button onClick={this.uploadImages}> Upload Images </button>

    </div>
  ) }
}

export default ImgUpload;

