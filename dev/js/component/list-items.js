import React, {PureComponent} from 'react';

class ListItem extends PureComponent {

    executeActionIfNotNull (action, data) {
        if(action)
            action(data);
    }
    
    render() {
        let item = this.props.item;

        return (
            <div>
                    <li 
                        //key={user.id}
                        onClick={
                            () => {
                               /*if(this.props.itemClickAction)
                                this.props.itemClickAction(user)*/
                                this.executeActionIfNotNull(this.props.itemClickAction, item)
                            }
                        }
                    >
                        {this.props.itemText}
                    </li>
                    <button disabled={!this.props.buttonClickAction} onClick={() =>
                        this.executeActionIfNotNull(this.props.buttonClickAction, item)}
                    >
                        {this.props.buttonText}
                    </button>
            </div>
        );
    }
}

export default ListItem;