import React, {
    useEffect,
    useState
} from 'react'
import {
    Select,
    Form,
    Button,
    Input,
    Row,
    Col,
    Divider,
    Typography,
    Spin,
    Modal
} from 'antd'
import { toast } from 'react-toastify'
import {
    magic
} from '../function/test'
import {
    isEmpty
} from 'lodash'
import { v4 as uuidv4 } from 'uuid';
import { PHILIPS_3T } from '../constants/options'
import {
    LoadingOutlined          
} from '@ant-design/icons'
const {Option} = Select
const {Title} = Typography

const option1 = [
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
]

const formItemLayout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 8 },
};

const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

const Siemens3T = () => {
    const [form] = Form.useForm()
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [history, setHistory] = useState([])
    
    const handleChange = async () => {
        try {
          const values = await form.validateFields();
          
          console.log('Success:', values);
        } catch (errorInfo) {
          console.log('Failed:', errorInfo);
        }
    };

    const handleSubmit = async () => {
        // console.log('sending request from client to server')

        // // retrieve from data
        // const options = {...await form.validateFields(), uid: uuidv4().toString()}
        // // filter option with undefined value
        // Object.keys(options).forEach(key => isEmpty(options[key]) && delete options[key])

        // console.log(JSON.stringify(options))
        // setHistory([...history, JSON.stringify(options)])
        // setLoading(true)
        
        // processRequst(options)
        // // magic(options).then(res => {
        // //     setLoading(false)
        // //     setResult(res.data.result)
        // //     toast.success('magic result recieved')
        // // }).catch(err => {
        // //     setLoading(false)
        // //     setResult('')
        // //     console.log('Magic test failed', err)
        // //     toast.error('Magic test failed')
        // // })
        toast.success('Processing completed, result in </usr/local/test1>')
    }

    const renderResult = () => {
        return result ? (
            <div>
                <p>{result}</p>
            </div>
        ) : null
    }

    const processRequst = (options) => {
        setTimeout(() => {
            setLoading(false)
            setResult('The processed files are located in </usr/local/test1>')
        }, 20000)
    }

    const renderStringInput = () => (
        <>
             {/* <Form.Item
                {...formItemLayout}
                name="option1"
                label="Please Select option1"
                rules={[
                {
                    required: true,
                    message: 'Please Select an option',
                },
                ]}
            >
                <Select style={{ width: 120 }} onChange={handleChange} name='option1'>
                    {option1.map(option => (
                        <Option value={option.value}>
                            {option.value}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                name="option2"
                label="Please Select option2"
                rules={[
                {
                    required: true,
                    message: 'Please Select an option',
                },
                ]}
            >
                <Select style={{ width: 120 }} onChange={handleChange} name='option2'>
                    {option1.map(option => (
                        <Option value={option.value}>
                            {option.value}
                        </Option>
                    ))}
                </Select>
            </Form.Item> */}
             <Form.Item
                {...formItemLayout}
                name='mag_path'
                label='Mag path'
                key='mag'
            >
                <Input 
                    style={{ width: 320 }}
                    placeholder="Mag files path"
                    maxLength={150}
                    onChange={handleChange}
                    name="mag"
                />
            </Form.Item>

            <Form.Item
                {...formItemLayout}
                name='ph_path'
                label='Ph path'
                key='ph'
            >
                <Input 
                    style={{ width: 320 }}
                    placeholder="Ph files path"
                    maxLength={150}
                    onChange={handleChange}
                    name="ph"
                />
            </Form.Item>

            <Form.Item
                {...formItemLayout}
                name='output_path'
                label='Output path'
                key='output'
            >
                <Input 
                    style={{ width: 320 }}
                    placeholder="Output path"
                    maxLength={150}
                    onChange={handleChange}
                    name="output"
                />
            </Form.Item>

            <Form.Item
                {...formItemLayout}
                name="readout"
                label="Please Select"
                rules={[
                {
                    message: 'Please Select an option',
                },
                ]}
            >
                <Select style={{ width: 120 }} onChange={handleChange} name='readout' defaultValue={PHILIPS_3T.readout[0]}>
                    {PHILIPS_3T.readout.map(option => (
                        <Option value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item
                {...formItemLayout}
                name="bkg_rm"
                label="Please Select"
                rules={[
                {
                    message: 'Please Select an option',
                },
                ]}
            >
                <Select style={{ width: 120 }} onChange={handleChange} name='bkg_rm' defaultValue={PHILIPS_3T.bkg_rm[0]}>
                    {PHILIPS_3T.bkg_rm.map(option => (
                        <Option value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
            </Form.Item>

        </>
    )

    const renderNumberInput = () => (
        Object.keys(PHILIPS_3T.number_input).map(key => (
            <Form.Item
                {...formItemLayout}
                name={key}
                label={key}
                key={key}
            >
                <Input 
                    style={{ width: 120 }}
                    placeholder="Input a number"
                    maxLength={10}
                    onChange={handleChange}
                    defaultValue={PHILIPS_3T.number_input[key]}
                    name="r_mask"
                />
            </Form.Item>
        ))
    )

    const renderLoading = () => (
        loading ? <Spin indicator={<LoadingOutlined style={{fontSize: '60px'}} />} 
            tip="QSM is under Processing"
        /> : renderResult()          
    )

    const renderSubmitButton = () => (
        <Button type="primary" 
            shape='round' 
            size='large' 
            onClick={handleSubmit} 
            style={{width: '100%'}}
            loading={loading}
        >
            Submit
        </Button>
    )

    return (
        <>
            <Title type='success'>Philips 3T / QSM</Title>
            <Divider orientation="left">Please choose your options</Divider>
            <Form form={form}>
                <Row gutter={[16, 16]} align="middle" justify='center'>
                    <Col span={8}>
                        {renderStringInput()}
                    </Col>

                    <Col  span={8}>
                        {renderNumberInput()}
                    </Col>
                    <Col span={8} style={{textAlign: 'center'}}>
                       {renderLoading()}
                       <Button onClick={() => setModal(true)}>Request Parameters History</Button>
                    </Col>
                </Row>
            </Form>
            <Row>
               <Col span={6} offset={9}>
                    {renderSubmitButton()}
               </Col>
            </Row>
            <Modal title='History' type="primary" visible={modal} onOk={() => setModal(false)} onCancel={() => setModal(false)}>
                {history && history.map((h,index) => (
                    <div>
                        <h1>Request No. {index + 1}</h1>
                        <p>{h}</p>
                    </div>
                ))}
            </Modal>
        </>
    )
}

export default Siemens3T
