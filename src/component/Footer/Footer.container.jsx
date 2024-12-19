import { connect } from 'react-redux';

import {
    FooterContainer as SourceFooterContainer,
    mapDispatchToProps as sourceMapDispatchToProps,
    mapStateToProps as sourceMapStateToProps,
} from 'SourceComponent/Footer/Footer.container';

export const mapStateToProps = (state) => ({
    ...sourceMapStateToProps(state),
    // TODO extend mapStateToProps
});

export const mapDispatchToProps = (dispatch) => ({
    ...sourceMapDispatchToProps(dispatch),
    // TODO extend mapDispatchToProps
});

export class FooterContainer extends SourceFooterContainer {
    // TODO implement logic
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
