import {
    Button,
    Card,
    CardHeader,
    Col,
    Container,
    Row,
} from "reactstrap";
import Header from "components/Headers/Header.js";
import { useEffect, useContext, useState } from "react";
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import { EcommerceContext } from "context/Ecommerce";
import makeToast from 'helpers/makeToast';

const BrandsTable = () => {
    const [brands, setBrands] = useState([]);
    const { getBrands, currentAccount } = useContext(EcommerceContext);

    useEffect(() => {
        const getAllBrands = async () => {
            try {
                const allBrands = await getBrands();
                setBrands(allBrands);
            } catch (err) {
                makeToast('error', err);
            }
        }

        getAllBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentAccount]);

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        }, {
            name: 'Created At',
            selector: row => new Date(row.timestamp.toNumber() * 1000).toLocaleString(),
        }
    ];
    return (
        <>
            <Header />
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row>
                                    <Col xl="6">
                                        <h3 className="mb-0">Brand Table</h3>
                                    </Col>
                                    <Col xl="6" className="text-right">
                                        <Link to="brand/create">
                                            <Button
                                                color="primary"
                                                size="md"
                                            >
                                                Create
                                            </Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <DataTable
                                columns={columns}
                                data={brands}
                                pagination
                            />
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default BrandsTable;
