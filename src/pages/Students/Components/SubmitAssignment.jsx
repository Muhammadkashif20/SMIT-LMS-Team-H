    import React, { useState } from 'react';
    import { Modal,Upload, Input, Form,Button } from 'antd';
    import {UploadOutlined} from "@ant-design/icons"
    const SubmitAssignment = ({visibleModal,setVisibleModal}) => {
        const [titleValue,setTitleValue]=useState("")
        const [descriptionValue,setDescriptionValue]=useState("")
        const [fileValue,setFileValue]=useState([])
        function handleModalSubmit(e) {
        console.log("titleValue=>",titleValue);
        console.log("descriptionValue=>",descriptionValue);
        console.log("fileValue=>",fileValue);
        }
    return (
        <div>
       
        <Modal
            title="File Upload Example"
            open={visibleModal}  
            onCancel={() => setVisibleModal(false)}
            footer={null}
            width={600}
        >
            <Form>
            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input the title!" }]}
            >
                <Input placeholder="Enter Title"  onChange={(e)=>setTitleValue(e.target.value)}/>
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[
                { required: true, message: "Please input the description!" },
                ]}
            >
                <Input.TextArea placeholder="Enter Description" rows={4} onChange={(e)=>setDescriptionValue(e.target.value)}/>
            </Form.Item>

            <Form.Item
                label="Choose a File"
                name="file"
                rules={[{ required: true, message: "Please upload a file!" }]}
            >
                <Upload
                beforeUpload={() => false} // File ko directly upload nahi karna
                maxCount={1}
                fileList={fileValue}
                onChange={(info)=>setFileValue(info.fileList)}
                >
                <Button icon={<UploadOutlined />} > Choose File</Button>
                </Upload>
            </Form.Item>

            <Form.Item>
                <Button onClick={handleModalSubmit} type="primary" block>
                Submit
                </Button>
            </Form.Item>
            </Form>
        </Modal>
        </div>
    );
    };

    export default SubmitAssignment;
