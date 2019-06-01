import React from 'react';
import { findAllErrors } from '../Core/validation-service'
import PropTypes from 'prop-types';

function ShowErros(props) {
    return (
        <div>
            {
                findAllErrors(props.validators, props.value).map(
                    (err, i) => <small key={i}>{err}</small>
                )
            }
        </div>
    );
}

ShowErros.propTypes = {
    value: PropTypes.any.isRequired,
    validators: PropTypes.object.isRequired
}

export default ShowErros;