import React from 'react';
import PropTypes from 'prop-types';
import Option from '../../components/Option/Option';

class Filter extends React.Component {
    constructor(props) {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className="filter">
                <div className="filter__item">
                    <Option
                        name={'stops'}
                        value={''}
                        text={'Все'}
                    />
                    <a className="filter__only" href="javascript:;">Только</a>
                </div>
                <div className="filter__item">
                    <Option
                        name={'stops'}
                        value={'0'}
                        text={'Без пересадок'}
                    />
                    <a className="filter__only" href="javascript:;">Только</a>
                </div>
                <div className="filter__item">
                    <Option
                        name={'stops'}
                        value={'1'}
                        text={'1 пересадка'}
                    />
                    <a className="filter__only" href="javascript:;">Только</a>
                </div>
                <div className="filter__item">
                    <Option
                        name={'stops'}
                        value={'2'}
                        text={'2 пересадка'}
                    />
                    <a className="filter__only" href="javascript:;">Только</a>
                </div>
                <div className="filter__item">
                    <Option
                        name={'stops'}
                        value={'3'}
                        text={'3 пересадка'}
                    />
                    <a className="filter__only" href="javascript:;">Только</a>
                </div>
            </div>
        )
    }
};

Filter.propTypes = {};

export default Filter;