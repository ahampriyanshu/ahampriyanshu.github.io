---
title: "AWS Cheat Sheet"
author: ahampriyanshu
excerpt: Handy commands for AWS CLI
categories: [Tutorials]
tags: [priyanshu, tiwari, ahampriyanshu, tutorials]
---

## What is AWS ?

> Amazon Web Services (AWS) is a subsidiary of Amazon.com that provides on-demand cloud computing platforms to individuals, companies, and governments, on a metered pay-as-you-go basis.

### Installing AWS CLI

```bash
pip install awscli
```

### Configuring AWS CLI

```bash
aws configure
```

## AWS S3 Commands

Amazon S3 is one of the most frequently used AWS services. Here are the essential commands for managing buckets and objects.

### Bucket Operations

```bash
# Create a new bucket
aws s3 mb s3://bucket-name

# Remove an empty bucket
aws s3 rb s3://bucket-name

# Remove bucket and all contents
aws s3 rb s3://bucket-name --force

# List all buckets
aws s3 ls

# List contents of a bucket
aws s3 ls s3://bucket-name
```

### File Operations

```bash
# Copy local file to S3
aws s3 cp file.txt s3://bucket-name/

# Copy S3 file to local directory
aws s3 cp s3://bucket-name/file.txt .

# Copy between S3 buckets
aws s3 cp s3://bucket1/file.txt s3://bucket2/

# Move local file to S3
aws s3 mv file.txt s3://bucket-name/

# Move S3 file to local directory
aws s3 mv s3://bucket-name/file.txt .

# Delete a file from S3
aws s3 rm s3://bucket-name/file.txt
```

### Directory Operations

```bash
# Sync local directory to S3
aws s3 sync ./local-folder s3://bucket-name/folder/

# Sync S3 directory to local
aws s3 sync s3://bucket-name/folder/ ./local-folder

# Copy directory recursively
aws s3 cp ./local-folder s3://bucket-name/folder/ --recursive

# Delete directory and contents
aws s3 rm s3://bucket-name/folder/ --recursive
```

### Useful S3 Options

- `--dryrun` - Preview operations without executing
- `--exclude "pattern"` - Exclude files matching pattern
- `--include "pattern"` - Include only files matching pattern
- `--delete` - Delete files in destination that don't exist in source (with sync)
- `--storage-class STANDARD_IA` - Specify storage class
- `--acl public-read` - Set access control list

### Advanced S3 Commands

```bash
# List buckets with detailed information
aws s3api list-buckets

# Get bucket region
aws s3api get-bucket-location --bucket bucket-name

# Enable versioning
aws s3api put-bucket-versioning --bucket bucket-name --versioning-configuration Status=Enabled

# Generate presigned URL
aws s3 presign s3://bucket-name/file.txt --expires-in 3600
```

---

## AWS EC2 Commands

EC2 provides scalable computing capacity in the cloud. These commands help you manage instances, security groups, and related resources.

### Instance Management

```bash
# Launch new instance
aws ec2 run-instances --image-id ami-12345678 --instance-type t2.micro

# List all instances
aws ec2 describe-instances

# Get specific instance details
aws ec2 describe-instances --instance-ids i-1234567890abcdef0

# Start stopped instance
aws ec2 start-instances --instance-ids i-1234567890abcdef0

# Stop running instance
aws ec2 stop-instances --instance-ids i-1234567890abcdef0

# Reboot instance
aws ec2 reboot-instances --instance-ids i-1234567890abcdef0

# Terminate instance
aws ec2 terminate-instances --instance-ids i-1234567890abcdef0
```

### AMI (Amazon Machine Image) Operations

```bash
# List your AMIs
aws ec2 describe-images --owners self

# Find Amazon Linux AMIs
aws ec2 describe-images --owners amazon --filters "Name=name,Values=amzn2-ami-hvm-*"

# Create AMI from instance
aws ec2 create-image --instance-id i-1234567890abcdef0 --name "My-AMI"

# Delete AMI
aws ec2 deregister-image --image-id ami-12345678
```

### Security Groups

```bash
# List all security groups
aws ec2 describe-security-groups

# Create security group
aws ec2 create-security-group --group-name my-sg --description "My security group"

# Add inbound rule
aws ec2 authorize-security-group-ingress --group-id sg-12345678 --protocol tcp --port 80 --cidr 0.0.0.0/0

# Remove inbound rule
aws ec2 revoke-security-group-ingress --group-id sg-12345678 --protocol tcp --port 80 --cidr 0.0.0.0/0

# Delete security group
aws ec2 delete-security-group --group-id sg-12345678
```

### Key Pairs

```bash
# List key pairs
aws ec2 describe-key-pairs

# Create key pair and save to file
aws ec2 create-key-pair --key-name my-key --query 'KeyMaterial' --output text > my-key.pem

# Delete key pair
aws ec2 delete-key-pair --key-name my-key
```

### Volumes and Storage

```bash
# List EBS volumes
aws ec2 describe-volumes

# Create EBS volume
aws ec2 create-volume --size 10 --availability-zone us-east-1a --volume-type gp2

# Attach volume
aws ec2 attach-volume --volume-id vol-12345678 --instance-id i-1234567890abcdef0 --device /dev/sdf

# Detach volume
aws ec2 detach-volume --volume-id vol-12345678

# Delete volume
aws ec2 delete-volume --volume-id vol-12345678
```

### Network and VPC

```bash
# List VPCs
aws ec2 describe-vpcs

# List subnets
aws ec2 describe-subnets

# List internet gateways
aws ec2 describe-internet-gateways

# List Elastic IPs
aws ec2 describe-addresses

# Allocate Elastic IP
aws ec2 allocate-address --domain vpc

# Associate Elastic IP
aws ec2 associate-address --instance-id i-1234567890abcdef0 --allocation-id eipalloc-12345678
```

### Useful EC2 Filters and Options

```bash
# Filter by instance state
--filters "Name=instance-state-name,Values=running"

# Filter by tag
--filters "Name=tag:Name,Values=MyServer"

# Custom output format
--query 'Instances[*].[InstanceId,State.Name,InstanceType]' --output table

# Validate without executing
--dry-run
```

---

## AWS IAM Commands

Identity and Access Management (IAM) is crucial for securing your AWS resources. These commands help you manage users, groups, roles, and policies.

### User Management

```bash
# List all users
aws iam list-users

# Create new user
aws iam create-user --user-name john-doe

# Get user details
aws iam get-user --user-name john-doe

# Update user name
aws iam update-user --user-name john-doe --new-user-name jane-doe

# Delete user
aws iam delete-user --user-name john-doe

# Add user to group
aws iam add-user-to-group --user-name john-doe --group-name developers

# Remove user from group
aws iam remove-user-from-group --user-name john-doe --group-name developers
```

### Access Keys

```bash
# List user's access keys
aws iam list-access-keys --user-name john-doe

# Create access key for user
aws iam create-access-key --user-name john-doe

# Deactivate access key
aws iam update-access-key --access-key-id AKIAIOSFODNN7EXAMPLE --status Inactive --user-name john-doe

# Delete access key
aws iam delete-access-key --access-key-id AKIAIOSFODNN7EXAMPLE --user-name john-doe
```

### Groups

```bash
# List all groups
aws iam list-groups

# Create new group
aws iam create-group --group-name developers

# Get group details and members
aws iam get-group --group-name developers

# Delete group
aws iam delete-group --group-name developers

# List groups for user
aws iam get-groups-for-user --user-name john-doe
```

### Policies

```bash
# List all policies
aws iam list-policies

# List customer-managed policies
aws iam list-policies --scope Local

# Create policy from file
aws iam create-policy --policy-name MyPolicy --policy-document file://policy.json

# Get policy details
aws iam get-policy --policy-arn arn:aws:iam::123456789012:policy/MyPolicy

# Get policy version
aws iam get-policy-version --policy-arn arn:aws:iam::123456789012:policy/MyPolicy --version-id v1

# Delete policy
aws iam delete-policy --policy-arn arn:aws:iam::123456789012:policy/MyPolicy
```

### Attach/Detach Policies

```bash
# Attach policy to user
aws iam attach-user-policy --user-name john-doe --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess

# Detach policy from user
aws iam detach-user-policy --user-name john-doe --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess

# Attach policy to group
aws iam attach-group-policy --group-name developers --policy-arn arn:aws:iam::aws:policy/PowerUserAccess

# Attach policy to role
aws iam attach-role-policy --role-name MyRole --policy-arn arn:aws:iam::aws:policy/S3ReadOnlyAccess
```

### List Attached Policies

```bash
# List policies attached to user
aws iam list-attached-user-policies --user-name john-doe

# List policies attached to group
aws iam list-attached-group-policies --group-name developers

# List policies attached to role
aws iam list-attached-role-policies --role-name MyRole

# List inline policies for user
aws iam list-user-policies --user-name john-doe
```

### Roles

```bash
# List all roles
aws iam list-roles

# Create role
aws iam create-role --role-name MyRole --assume-role-policy-document file://trust-policy.json

# Get role details
aws iam get-role --role-name MyRole

# Delete role
aws iam delete-role --role-name MyRole

# Create instance profile
aws iam create-instance-profile --instance-profile-name MyProfile

# Add role to instance profile
aws iam add-role-to-instance-profile --instance-profile-name MyProfile --role-name MyRole
```

### Password and Login Management

```bash
# Create login profile
aws iam create-login-profile --user-name john-doe --password MyPassword123

# Get login profile
aws iam get-login-profile --user-name john-doe

# Update password
aws iam update-login-profile --user-name john-doe --password NewPassword123

# Delete login profile
aws iam delete-login-profile --user-name john-doe

# Get password policy
aws iam get-account-password-policy

# Update password policy
aws iam update-account-password-policy --minimum-password-length 12 --require-symbols
```

### MFA (Multi-Factor Authentication)

```bash
# List MFA devices for user
aws iam list-mfa-devices --user-name john-doe

# Enable MFA device
aws iam enable-mfa-device --user-name john-doe --serial-number arn:aws:iam::123456789012:mfa/john-doe --authentication-code-1 123456 --authentication-code-2 789012

# Deactivate MFA device
aws iam deactivate-mfa-device --user-name john-doe --serial-number arn:aws:iam::123456789012:mfa/john-doe
```

---

## Pro Tips and Best Practices

### 1. Use Profiles for Multiple Accounts
```bash
# Configure named profile
aws configure --profile production

# Use profile in commands
aws s3 ls --profile production
```

### 2. Output Formatting
```bash
# Table format for better readability
aws ec2 describe-instances --output table

# JSON format for programmatic use
aws ec2 describe-instances --output json

# Text format for simple parsing
aws ec2 describe-instances --output text
```

### 3. Filtering and Querying
```bash
# Use JMESPath for complex queries
aws ec2 describe-instances --query 'Reservations[*].Instances[*].[InstanceId,State.Name,PublicIpAddress]'

# Combine filters for precise results
aws ec2 describe-instances --filters "Name=instance-state-name,Values=running" "Name=tag:Environment,Values=production"
```

### 4. Safety First
- Always use `--dry-run` when available to preview changes
- Test commands in development environments first
- Use IAM policies to restrict CLI access appropriately
- Regularly rotate access keys

### 5. Automation and Scripting
```bash
# Store frequently used commands as shell functions
get_running_instances() {
    aws ec2 describe-instances --filters "Name=instance-state-name,Values=running" --query 'Reservations[*].Instances[*].[InstanceId,Tags[?Key==`Name`].Value|[0]]' --output table
}

# Use variables for reusable values
BUCKET_NAME="my-company-backups"
aws s3 sync ./data s3://$BUCKET_NAME/$(date +%Y-%m-%d)/
```
