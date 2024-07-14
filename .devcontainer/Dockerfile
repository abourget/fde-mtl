FROM --platform=linux/amd64 mcr.microsoft.com/devcontainers/base:ubuntu-22.04

ARG DEBIAN_FRONTEND=noninteractive

RUN wget -O hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v0.57.2/hugo_extended_0.57.2_Linux-64bit.tar.gz ;\
    tar xf hugo.tar.gz && mv hugo /usr/bin/hugo && rm -rf hugo.tar.gz
EXPOSE 1313

# RUN <<EOT
#     wget -qO- https://get.pnpm.io/install.sh | ENV="${HOME}/.zshrc" SHELL=/bin/zsh sh -
#     pnpm env use -g lts
# EOT

# ARG OHMYZSH_HOME=${HOME}/.oh-my-zsh

# ARG OHMYZSH_THEME=${OHMYZSH_HOME}/custom/themes
# RUN <<EOT
#     git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${OHMYZSH_THEME}/powerlevel10k
#     sed -i 's|ZSH_THEME="devcontainers"|ZSH_THEME="powerlevel10k/powerlevel10k"|g' .zshrc
#     echo 'POWERLEVEL9K_DISABLE_CONFIGURATION_WIZARD=true' >> .zshrc
# EOT

