import React, { useContext} from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    Spinner,
} from "reactstrap";
import { Formik } from 'formik';
import UserHeader from "components/Headers/UserHeader.js";
import { EcommerceContext } from "context/Ecommerce";
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';
import makeToast from 'helpers/makeToast';


const brandCreateSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
});

const BrandForm = () => {
    const { addBrand } = useContext(EcommerceContext);
    const history = useHistory();

    return (
        <>
            <UserHeader />
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Brand Form</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Formik
                                    validationSchema={brandCreateSchema}
                                    initialValues={{ name: '' }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        addBrand(values).then(res => {
                                            makeToast("success", "Brand sucessfully created");
                                            history.push('/admin/brands');
                                            setSubmitting(false);
                                        }).catch(error => {
                                            makeToast("error", error);
                                            setSubmitting(false);
                                        });
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleBlur,
                                        handleSubmit,
                                        setFieldValue,
                                        isSubmitting,
                                    }) => (
                                        < Form onSubmit={handleSubmit}>
                                            <div className="pl-lg-4">
                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup >
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-username"
                                                            >
                                                                Name<span className="text-danger ml-1">*</span>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-name"
                                                                placeholder="Name"
                                                                name="name"
                                                                type="text"
                                                                onChange={(event) => {
                                                                    setFieldValue("name", (event.target.value).toLowerCase);
                                                                }}
                                                                onBlur={handleBlur}
                                                                value={values.name}
                                                            />
                                                            <p className="text-danger ml-2">{errors.name && touched.name && errors.name}</p>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Button
                                                    color="info"
                                                    type="submit" disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? <Spinner animation="grow" variant="light" /> : "SUBMIT"}
                                                </Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BrandForm
