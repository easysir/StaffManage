import React from 'react';
import StaffHeader from './StaffHeader.js';
import StaffItemPanel from './StaffItemPanel.js';
import StaffFooter from './StaffFooter.js';
import StaffDetail from './StaffDetail.js';

import Staff from './STAFF.js';


class App extends React.Component {
    constructor(){
	    super();
		this.state = {
		    staff : new Staff,
			staffDetail: null
		};
	}
	
	//增
	addStaffItem(item){
	    this.setState({
		    staff: this.state.staff.addStaffItem(item)
		});
	}
	//删
	removeStaffItem(key){
	    this.setState({
		    staff: this.state.staff.removeStaffItem(key)
		});
	}
	
	/*
	 *详情
	 */
	//打开
	detailStaffItem(key){
	    this.setState({
		    staffDetail: this.state.staff.staff.filter(item => {
			    return item.key==key;
			})[0]
		});
	}
	//关闭
	closeDetail(){
	    this.setState({
		    staffDetail: null
		});
	}
	//编辑
	editDetail(item){
	    this.setState({
		    staff : this.state.staff.editStaffItem(item)
		});
	}
	
	/*
	 * 排序
	 */
	sortStaff(sortType) {
	    this.setState({
		    staff: this.state.staff.sortStaff(sortType) 
		});
	}
	
	/*
	 * 筛选
	 */
	filtStaff(filtType) {
	    this.setState({
		    staff: this.state.staff.filtStaff(filtType)
		});
	}
	
	/*
	 * 搜索
	 */
	searchStaff(word) {
	    this.setState({
		    staff: this.state.staff.searchStaff(word)
		});
	}

	
	render(){
	  return (
	    <div>
		  <StaffHeader sortStaff={this.sortStaff.bind(this)} filtStaff={this.filtStaff.bind(this)} searchStaff={this.searchStaff.bind(this)}/>
		  <StaffItemPanel items={this.state.staff.staff} removeStaffItem={this.removeStaffItem.bind(this)} detailStaffItem={this.detailStaffItem.bind(this)}/>
		  <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
		  <StaffDetail staffDetail={this.state.staffDetail} closeDetail={this.closeDetail.bind(this)} editDetail={this.editDetail.bind(this)}/>
		</div>
	  );
	}
}

React.render(<App />, document.getElementById('app'));