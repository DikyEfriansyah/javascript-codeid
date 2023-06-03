create table t_agent(
	agent_code varchar primary key,
	agent_name varchar(30),
	agent_office varchar(40),
	basic_comission int
)

create table t_client(
	client_number varchar primary key,
	client_name varchar(30),
	birth_date timestamp
)

insert into t_agent(agent_code, agent_name, agent_office) values
('AG001', 'lIDYA', 'JAKARTA'),
('AG002', 'RUDI', 'BALI'),
('AG003', 'DICKY', 'BALI'),
('AG004', 'DAVID', 'SURABAYA'),
('AG005', 'FARIZ', 'SURABAYA')

insert into t_client values
('CL001', 'WAYNE ROONEY', '5/11/1956'),
('CL002', 'RYAN GIGGS', '9/3/1972'),
('CL003', 'DAVID BECKHAM', '9/3/1985'),
('CL004', 'MICHAEL OWEN', '9/3/2012')

select * from t_agent
select * from t_client

update t_client set birth_date = '11/5/1956' where client_number = 'CL001'
update t_client set birth_date = '3/9/1972' where client_number = 'CL002'
update t_client set birth_date = '3/9/1985' where client_number = 'CL003'
update t_client set birth_date = '3/9/2012' where client_number = 'CL004'


create table t_policy(
	policy_number serial primary key,
	policy_submit_date timestamp,
	premium money,
	discount int,
	commission money,
	client_number varchar,
	agent_code varchar,
	policy_status varchar,
	policy_due_date timestamp,
	constraint t_client_fk foreign key(client_number) references t_client(client_number),
	constraint t_agent_fk foreign key(agent_code) references t_agent(agent_code)
)

insert into t_policy(policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status) values
('5/1/2018', 18600000, 10, 930000, 'CL001', 'AG001', 'INFORCE'),
('5/1/2018', 2500000, 10, 125000, 'CL002', 'AG002', 'INFORCE'),
('10/1/2018', 2500000, 10, 125000, 'CL003', 'AG003', 'TERMINAT'),
('25/1/2018', 4000000, 10, 200000, 'CL003', 'AG002', 'PROPOSAL'),
('25/1/2018', 2625000, 10, 131250, 'CL004', 'AG002', 'PROPOSAL')

select * from t_policy

select * from t_policy join t_client on t_policy.client_number = t_client.client_number 
where t_policy.policy_submit_date > '2018/1/10' and t_client.birth_date > '1956/11/5'

select * from t_policy join t_agent on t_policy.agent_code = t_agent.agent_code 
where t_policy.policy_status = 'INFORCE' and t_agent.agent_office = 'JAKARTA'

update t_agent set basic_comission = (p.commission/p.premium*100) from t_policy p where t_agent.agent_code = p.agent_code

update t_policy set policy_due_date = policy_submit_date + INTERVAL '30 day';

select a.agent_code, a.agent_name, p.premium - (p.premium*30/100) as price from t_policy p
join t_agent a on a.agent_code = p.agent_code order by price asc
 