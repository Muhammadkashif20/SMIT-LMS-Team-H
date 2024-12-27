    import React, { useState } from 'react';
    import { Modal,Upload, Input, Form,Button } from 'antd';
    import {UploadOutlined} from "@ant-design/icons"
    import { message, Space } from 'antd';
    const SubmitAssignment = ({visibleModal,setVisibleModal}) => {
        const [titleValue,setTitleValue]=useState("")
        const [descriptionValue,setDescriptionValue]=useState("")
        const [fileValue,setFileValue]=useState([])
        const [messageApi, contextHolder] = message.useMessage();
        function handleModalSubmit() {
        console.log("AssignmentTitle=>",titleValue,"AssignmentDescription=>",descriptionValue,"AssignmentFile=>",fileValue);
        messageApi.open({
            type: 'success',
            content: 'Your Assignment is Submited Successfully!',
          }); 
          setVisibleModal(false)
        }
    
    return (
        <div>
       
        <Modal
            title="Submit Your Assignment"
            open={visibleModal}  
            onCancel={() => setVisibleModal(false)}
            footer={null}
            width={600}
            
        >
            <Form onFinish={handleModalSubmit}>
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
                {contextHolder}
                <Space>
                <Button  htmlType='submit' type="primary" block>
                Submit
                </Button>
                </Space>
            </Form.Item>
            </Form>
        </Modal>
        </div>
    );
    };

    export default SubmitAssignment;
