import React, { useState } from 'react';
import { Button, Input, Form, message } from 'antd'; // Ant Design
import { Box, Typography } from '@mui/material'; // Material-UI
import 'antd/dist/reset.css'; // Ant Design default styles
import { FormInstance } from 'antd/es/form'; // Importação correta do FormInstance
import Footer from '../components/Footer';

interface FormData {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
}

const Cadastro: React.FC = () => {
  const [form] = Form.useForm<FormInstance>(); // Tipagem correta
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = (values: FormData) => {
    setLoading(true);

    if (values.senha !== values.confirmarSenha) {
      message.error('As senhas não coincidem!');
      setLoading(false);
      return;
    }

    // Simulação de envio de dados
    setTimeout(() => {
      message.success('Cadastro realizado com sucesso!');
      setLoading(false);
      form.resetFields();
    }, 1000);
  };

  return (
    <>
      <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Cadastro
        </Typography>
        <Form
          form={form} // Agora não dará erro
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Nome"
            name="nome"
            rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
          >
            <Input />
          </Form.Item>

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

          <Form.Item
            label="Confirmar Senha"
            name="confirmarSenha"
            rules={[{ required: true, message: 'Por favor, confirme sua senha!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </Box>
      <Footer />
    </>
  );
};

export default Cadastro;
