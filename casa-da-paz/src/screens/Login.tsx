import React, { useState } from 'react';
import { Button, Input, Form, message } from 'antd'; // Ant Design
import { Box, Typography } from '@mui/material'; // Material-UI
import 'antd/dist/reset.css'; // Ant Design default styles
import { FormInstance } from 'antd/es/form'; // Importação correta do FormInstance
import Footer from '../components/Footer';

interface FormData {
  email: string;
  senha: string;
}

const Login: React.FC = () => {
  const [form] = Form.useForm<FormInstance>(); // Tipagem correta
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = (values: FormData) => {
    setLoading(true);

    // Simulação de envio de dados de login
    setTimeout(() => {
      message.success('Login realizado com sucesso!');
      setLoading(false);
      form.resetFields();
    }, 1000);
  };

  return (
    <>
      <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <Form
          form={form} // Agora não dará erro
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Por favor, insira seu email!' },
              { type: 'email', message: 'O email inserido não é válido!' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="senha"
            rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </Box>
      <Footer />
    </>
  );
};

export default Login;
