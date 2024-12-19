import {
    FooterComponent as SourceFooterComponent,
} from 'SourceComponent/Footer/Footer.component';

export class FooterComponent extends SourceFooterComponent {
    render() {
        return (
            <div>
                { super.render() }

                <p>Hello World</p>
            </div>
        );
    }
}

export default FooterComponent;
