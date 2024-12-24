    import React from 'react';
    import { Modal,Upload, Input, Form,Button } from 'antd';
    import {UploadOutlined} from "@ant-design/icons"
    const SubmitAssignment = ({visibleModal,setVisibleModal}) => {
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
                <Input placeholder="Enter Title" />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[
                { required: true, message: "Please input the description!" },
                ]}
            >
                <Input.TextArea placeholder="Enter Description" rows={4} />
            </Form.Item>

            <Form.Item
                label="Choose a File"
                name="file"
                rules={[{ required: true, message: "Please upload a file!" }]}
            >
                <Upload
                beforeUpload={() => false} // File ko directly upload nahi karna
                maxCount={1} // Ek hi file upload karne ki limit
                >
                <Button icon={<UploadOutlined />}>Choose File</Button>
                </Upload>
            </Form.Item>

            <Form.Item>
                <Button type="primary" block>
                Submit
                </Button>
            </Form.Item>
            </Form>
        </Modal>
        </div>
    );
    };

    export default SubmitAssignment;
