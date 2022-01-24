FROM node:17-bullseye

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Install additional packages
RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
    && apt-get -y install git openssh-client ca-certificates less iproute2 procps apt-transport-https gnupg2 sudo curl lsb-release

# Add sudo support for the non-root user
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME
