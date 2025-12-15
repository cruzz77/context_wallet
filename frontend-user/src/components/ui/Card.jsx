import classNames from 'classnames';

const Card = ({ children, className, hover = false, ...props }) => {
    return (
        <div
            className={classNames(
                "bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-200",
                hover && "hover:shadow-lg hover:border-gray-200 hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
