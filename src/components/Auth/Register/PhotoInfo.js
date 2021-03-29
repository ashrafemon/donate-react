import React, {useRef} from "react";
import {FormGroup, PortionTitle, UploadPhotoBtn, UploadPhotoInput} from "../styled";
import {FaCloudUploadAlt} from 'react-icons/fa'

const PhotoInfo = () => {
    const inputRef = useRef(null)

    return (
        <>
            <PortionTitle style={{textAlign: 'left'}}>You're almost <br/> done</PortionTitle>

            <FormGroup>
                <UploadPhotoInput type="file" ref={inputRef}/>

                <UploadPhotoBtn onClick={() => inputRef.current.click()}>
                    <FaCloudUploadAlt/>
                    Upload a photo
                </UploadPhotoBtn>
            </FormGroup>
        </>
    )
}

export default PhotoInfo