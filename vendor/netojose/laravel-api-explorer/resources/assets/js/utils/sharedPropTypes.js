import PropTypes from "prop-types"

export const route = PropTypes.shape({
    __id: PropTypes.string,
    action: PropTypes.string,
    controller: PropTypes.string,
    request_handler: PropTypes.string,
    description: PropTypes.string,
    exists: PropTypes.bool,
    http_verb: PropTypes.oneOf(["GET", "POST", "PUT", "PATCH", "DELETE"]),
    middlewares: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    parameters: PropTypes.array,
    rules: PropTypes.object,
    uri: PropTypes.string,
    url: PropTypes.string,
    wheres: PropTypes.object
})

export const argumentsList = PropTypes.arrayOf(
    PropTypes.shape({
        __id: PropTypes.string.isRequired,
        disabledName: PropTypes.bool,
        disabledValue: PropTypes.bool,
        disabledDelete: PropTypes.bool,
        disabledToggleCheck: PropTypes.bool,
        placeholderValue: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.string,
        checked: PropTypes.bool
    })
)
