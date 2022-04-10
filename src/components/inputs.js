import React from 'react';
import styled from 'styled-components';

export const SearchArea = styled.div`
    margin: 15px 0px 15px 0px;
    text-align: left;
    input, textarea, .ql-container {
        background-color: #F3F4F5;
        border: 1px solid #F3F4F5;
        color: gray;
        border-radius: 20px;
        width: calc(100% - 40px);
        padding: 10px 20px;
        &::placeholder {
            color: gray;
        }
        &:focus {
            outline: none;
        }
    }
    & .ql-container {
        width: 100% !important;
    }
`;

const Search = styled.input`
    width: 100%;
    padding: 5px 0px;
    font-size: 16px;
`;
const SearchResults = styled.div`
    position: absolute;
    padding: 10px 0px;
    width: calc(100% - 40px);
    border: 1px solid #dddfe1;
    background-color: white;
    max-height: 250px;
    overflow-y: scroll;
    border-radius: 10px;
`;
const Result = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    };
    font-family: revert;
    font-size: revert;
    color: gray;
`;

export class SearchInput extends React.Component {
    state = {"searchOptions": [], "searchValue": ""};

    componentDidMount() {
        this.setState({
            "searchValue": this.props.value,
            "searchOptions": this.props.searchOptions,
        })
    }

    search = async (e) => {
        const v = e.target.value;
        if (v === "" || v === undefined) {
            this.setState({"searchValue": ""});
        } else {
            let searchOptions = this.props.searchOptions.filter(o => {
                return (o.label.toLowerCase().startsWith(v.toLowerCase()))
            });
            this.setState({
                "searchValue": v,
                "searchOptions": searchOptions,
            });
        }
    };

    select = async (o, close) => {
        if (!close) {
            this.props.onSelect(o);
            this.setState({
                "savedValue": o.label
            })
        }
        this.setState({
            "searchValue": "",
            "searchOptions": this.props.searchOptions,
        })
        
    };

    render() {
        return (
            <SearchArea>
                <div>
                    <Search
                        onChange={this.search}
                        placeholder={this.props.placeholder}
                        value={this.state.searchValue === "" ? this.state.savedValue : this.state.searchValue}
                    />
                </div>
                <div>
                    {this.state.searchValue !== "" ?
                        <SearchResults>
                            {this.state.searchOptions.length > 0 ?
                                this.state.searchOptions.map((o, index) => {
                                    return(<Result onClick={async () => {this.select(o, false)}} key={index}>{o.label}</Result>)
                                })
                                :
                                <Result>{"No results"}</Result>
                            }
                        </SearchResults>
                        :
                        <></>
                    }
                </div>
            </SearchArea>
        )
    }
}

export const TextInput = ({type, id, onChange, placeholder, value}) => (
    <SearchArea>
        <input id={id} onChange={onChange} placeholder={placeholder} value={value} type={type}/>
    </SearchArea>
);