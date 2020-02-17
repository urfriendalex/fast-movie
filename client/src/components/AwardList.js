import React, { Component } from 'react'
import ApiService from "../ApiService";

class AwardList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            awardList: [],
            message: null
        }
        this.deleteAward = this.deleteAward.bind(this);
        this.editAward = this.editAward.bind(this);
        this.addAward = this.addAward.bind(this);
        this.reloadAwardList = this.reloadAwardList.bind(this);
    }

    componentDidMount() {
        this.reloadAwardList();
    }

    reloadAwardList() {
        ApiService.fetchAwards()
            .then((res) => {
                console.log(res);
                this.setState({awardList: res.data.data})
            });
    }

    deleteAward(awardId) {
        ApiService.deleteAward(awardId)
           .then(res => {
               this.setState({message : res.data.message});
               this.setState({awardList: this.state.awardList.filter(award => award.id !== awardId)});
           })

    }

    editAward(awardId) {
        window.localStorage.setItem("awardId", awardId);
        this.props.history.push('edit-award');
    }

    addAward() {
        window.localStorage.removeItem("awardId");
        this.props.history.push('add-award');
    }

    render() {
        return (
            <div>
                <h2 className="page-title">List of Awards</h2>
                <button className="btn-add" onClick={() => this.addaward()}> Add award</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="d-none">Id</th>
                            <th>Title</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.awardList.map(
                                award =>
                                    <tr key={award.id}>
                                        <td>{award.title}</td>
                                        <td>
                                            <button className="btn-edit" onClick={() => this.editaward(award.id)}> Edit</button>
                                            <button className="btn-delete" onClick={() => this.deleteaward(award.id)}> Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default AwardList;